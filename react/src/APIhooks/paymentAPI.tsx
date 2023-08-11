import { useQuery } from "react-query";
import { Superhero } from "../Modal/paymentInterface";
import { http } from "../Config/axiosConfig.js";

const fetchSuperHero = () =>
    // http.get<Superhero[]>('/payment/all').then((res) => res.data);
    http.get('/payment/all').then((res) => res.data.result.items);

export const useSupeData = (onSuccess: any, onError: any) => {
    // return useQuery<Superhero[]>('supers', fetchSuperHero, {
    return useQuery<Superhero[]>('supers', fetchSuperHero, {
        cacheTime: 60000, //cache goes to garbage after 1 min (default is 5 min if not given)
        staleTime: 30000, //it behaves as if things in our cache need not to change for given amount of time
        refetchInterval: 10000, //will refetch all the api of the page after given amount of time (will be very helpful with live data updating on page) (con- will rerender the page and will move you to top of page after re-render)
        onSuccess,
        onError,
        // select: (data:Superhero[]) => {filter the data as per requirement}
    });
}