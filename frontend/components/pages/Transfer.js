import React, { useState, useEffect } from 'react'

const Transfer = (isSignedIn) => {
    const [balance, setBalance] = useState()
    const contractId = isSignedIn.contractId;

    const getAccountBalance = () => {
        return isSignedIn.wallet.viewMethod({
            method: 'ft_balance_of', args: { account_id: isSignedIn.wallet.accountId }, contractId
        })
    }
    useEffect(() => {
        getAccountBalance()
            .then(setBalance)
            .catch(alert)
            .finally(() => {
                console.log(balance)
            })


    }, []);

    return (
        <React.Fragment>
            <section className="content-container">
                <div className="textArea">
                    <h2>Transfer Learning Tokens</h2>
                    <p>
                        We are glad you are rewarding the hardwork.
                    </p>

                    <p>
                        In vitae eros nunc. Proin aliquam varius odio eget tempus. Nam et gravida arcu, at varius nulla. Vestibulum convallis eget arcu non mollis. Pellentesque ipsum massa,
                        dignissim at metus ac, cursus porta nulla. Praesent elementum ipsum euismod neque facilisis vulputate. Vestibulum metus nisl, elementum et metus eget, imperdiet luctus dui.
                        Vestibulum sed dui nulla. Vestibulum posuere fringilla pretium. Proin eu ligula nec arcu feugiat lobortis. Maecenas porttitor euismod tempus.
                    </p>

                    <p>
                        Donec viverra, quam in interdum fermentum, massa erat imperdiet purus, laoreet consequat sem neque et sapien. Integer et euismod eros, vel placerat justo. Class aptent taciti
                        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sed enim velit. Vivamus mi nunc, sollicitudin malesuada auctor ut, aliquam sit amet quam. Mauris
                        viverra, quam eu gravida sollicitudin, metus massa eleifend sem, et mattis sapien ligula a diam. Morbi viverra dolor ac vehicula ultricies. Vestibulum quis est sed nunc laoreet
                        semper sit amet eget nisi. Aliquam tempor est est, nec vestibulum diam tempor ut. Suspendisse ultrices purus eget laoreet commodo. Proin laoreet placerat metus, quis scelerisque
                        orci sagittis ac. Fusce blandit finibus tellus, vitae dictum nisi euismod vitae. Sed ullamcorper sed tellus quis imperdiet.
                    </p>

                    <p>
                        Suspendisse et est enim. Sed accumsan tellus sit amet fermentum facilisis. Curabitur in neque at felis tempus hendrerit nec ut orci. Donec eu molestie lorem. Ut turpis ipsum,
                        sagittis sit amet venenatis eget, blandit quis leo. Curabitur vel velit ornare, dignissim ipsum rhoncus, egestas dolor. Morbi ut velit varius, accumsan ex id, convallis lectus.
                        Duis hendrerit turpis nec nulla condimentum dapibus. Phasellus ullamcorper augue sit amet sapien posuere, sit amet lacinia quam dictum. Cras lobortis eros quis porttitor vestibulum.
                        Sed eget sollicitudin libero. Donec dui metus, imperdiet eu magna at, scelerisque commodo eros.
                    </p>

                    <p>
                        Donec aliquet egestas odio vitae finibus. Suspendisse potenti. Maecenas semper, felis vitae sodales laoreet, libero magna tempus lorem, et placerat felis lorem sed leo. Nam at leo
                        pretium lectus convallis posuere. Quisque et imperdiet neque, eu venenatis magna. Curabitur elementum nisl a pharetra sagittis. Morbi euismod enim quis lorem vulputate, eget
                        pellentesque diam vestibulum. In nec accumsan odio. Suspendisse potenti. Duis varius libero a massa vehicula molestie. Vestibulum eros lectus, egestas vel tincidunt eu,
                        viverra quis arcu. Curabitur maximus tincidunt efficitur. In hac habitasse platea dictumst. Sed aliquam laoreet lorem in pharetra. Suspendisse faucibus, velit eget viverra vehicula,
                        neque tortor pellentesque libero, tincidunt interdum augue tortor dapibus sem. Integer vitae tristique elit.
                    </p>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Transfer;