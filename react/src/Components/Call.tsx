import { useSupeData } from '../APIhooks/paymentAPI';
import { Superhero } from '../Modal/paymentInterface';

function SupePage() {

    const onSuccess = (data: Superhero[]) => console.log('Execute Task After Successful Retrieval Of Data', data)
    const onError = (error: any) => console.log('Execute Task After Facing Errors While Retrieval Of Data:', error?.message)

    const { isLoading, data, isError, error, isFetching, refetch } = useSupeData(onSuccess, onError);
    if (isLoading || isFetching) {
        return <h2>Loading...</h2>;
    }

    if (isError) {
        return <h2>{(error as Error).message}</h2>;
    }

    const handleRefetch = () => {
        refetch(); // wont work if put directly in onClick or if used arrow function inside onClick instead create another function like this
    };


    return (
        <>
            <h2>React Query Way</h2>
            {data?.map((el,key) => (
                <div key={key}>{el.amount}</div>
            ))}
            <br />
            <button onClick={handleRefetch}>Button For Manual Refetch Of Page Api's</button> {/** refetch function will work regardless if stale and cache time is provided or not */}
        </>
    );
}

export default SupePage;