const PaymentsAdd = (props: PaymentsAddProps) : JSX.Element => {
    console.log(props)
    return <>
        <h2>This is the payments add page</h2>
        <p>Rest requests will be sent to {props.serverUrl}</p>
    </>
}

export default PaymentsAdd;

export type PaymentsAddProps = {
    serverUrl : string
}