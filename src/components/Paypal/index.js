import React, {useRef, useEffect} from 'react'

const PPBtn = () => {

    const paypal = useRef();

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "CUSTOM TABLE",
                            amount: {
                                value: 650.00,
                                currency_code: "USD"
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await (actions.order.capture());
                console.log(order)
            },
            onError: (err) => {
                console.log(err);
            }
        }).render(paypal.current)
    }, [])
    return (
        <>
            <div ref={paypal}>
            </div>
        </>
    )
}

export default PPBtn
