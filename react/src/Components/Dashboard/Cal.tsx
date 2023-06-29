import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import Pagination from "@mui/material/Pagination";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
  Button,
} from "@mui/material";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { tokens } from "../../theme.js";
import { http } from "../../Config/axiosConfig.js";

function Cal() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState<any[]>([]);
  const [Orders, setOrders] = useState<any[]>([]);
  const [Selectitem, setSelectitem] = useState<any>({});
  console.log(Selectitem);
  const {
    id,
    amount,
    amount_due,
    amount_paid,
    attempts,
    currency,
    receipt,
    status,
  } = Selectitem;
  const itemsPerPage = 5;
  const [page, setPage] = useState(1);
  const [noPages, setNoPages] = useState(0);

  const [openDilog, setOpenDilog] = useState(false);
  const [scroll, setScroll] = useState<DialogProps["scroll"]>("paper");

  const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
    setOpenDilog(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpenDilog(false);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (openDilog) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [openDilog]);

  //   For Pagination
  //   const handleChange = (event:any, value:any) => {
  //     setPage(value);
  //   }

  const handleDateClick = (selected: any) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected: any) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  const handleClick = (event: any) => {
    http.get(`/payment/order/${event.id}`).then((res) => {
      setSelectitem(res.data.result);
    });
    setOpenDilog(true);
  };

  useEffect(() => {
    http.get("/payment/orders").then((res) => {
      setOrders(res.data.result.items);
      setNoPages(Math.ceil(res.data.result.items.length / itemsPerPage));
    });
  }, []);

  return (
    <div>
      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box
          sx={{ backgroundColor: colors.primary[400] }}
          flex="1 1 50%"
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Pending Payments</Typography>
          <List>
            {Orders.map((event: any) => {
              if (event.status != "paid") {
                return (
                  <>
                    <ListItem
                      key={event.id}
                      sx={{
                        backgroundColor: colors.greenAccent[500],
                        margin: "10px 0",
                        borderRadius: "2px",
                      }}
                    >
                      <ListItemText
                        primary={`Amount :${event.amount}`}
                        secondary={
                          <Typography>
                            <Button
                              variant="contained"
                              onClick={() => handleClick(event)}
                            >
                              View Details
                            </Button>
                            {formatDate(event.start, {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </Typography>
                        }
                      />
                    </ListItem>
                  </>
                );
              }
            })}
          </List>
          {/* <Pagination
          count={noPages}
          page={page}
          onChange={handleChange}
          defaultPage={1}
          color="secondary"
          size="small"
          sx={{textAlign:'bottom'}}
        /> */}
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2022-09-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2022-09-28",
              },
            ]}
          />
          <Dialog
            open={openDilog}
            onClose={handleClose}
            scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            <DialogTitle id="scroll-dialog-title">Payment Details</DialogTitle>
            <DialogContent dividers={scroll === "paper"}>
              <DialogContentText
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}
              >
                <h3>ID : {id}</h3>
                <h3>Amount : {amount}</h3>
                <h3>Amount Due : {amount_due}</h3>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" color="primary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="contained" color="error" onClick={handleClose}>
                Reminder
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </div>
  );
}

export default Cal;
