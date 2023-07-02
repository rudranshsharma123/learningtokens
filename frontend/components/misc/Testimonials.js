import React from 'react'
import user1 from '../../images/patrick.png'
import user2 from '../../images/nan.jpg'
import './Testimonials.css'


const Home = () => {
    return (
        <React.Fragment>
            <section className="content-container">
                <div className="textArea">
                    <h2>What are learning tokens?</h2>
                </div>
                <div className="cust-container">
                    <p><span> Promtes community enagements </span></p>
                    <p>As we know, communities/organizations benefit from collaboration. Learning through interactions with others capitalizes on everybody’s resources and skills. Beyond independent work, individuals achieve higher levels of learning when knowledge grows collectively. Engagement and coordination become essential, and rewards can provide the incentives to motivate behavior. That's why we propose a Learning Token as a positive reinforcer that recognizes, registers, and rewards community engagement in collective learning, certifying the acquisition of skills and competencies.</p>
                </div>

                <div className="cust-container">
                    <p><span>Breakup of a learning token</span></p>
                    <p><p>We start this process with a proposed Hybrid Token tf(tN,tF), that is, fungible with a class of non-fungible and fungible tokens.</p>

                        <p>Token Variables according to the Token Taxonomy Initiative, TTI:</p>
                        <ul>
                            <li>Token Type: Two types, Fungible to reward engagement in the community and Non-Fungible to certify accredited acquisition of skills.</li>
                            <li>Token Unit: Singleton, no subdivision.</li>
                            <li>Value Type: Intrinsic, the digital token itself is valuable.</li>
                            <li>Representation Type:
                                <ul>
                                    <li>Common, for fungible engagement rewards, tokens are balances on a single DL, without individual identities.</li>
                                    <li>Unique, for non-fungible certificates, NFTs with their own identities.</li>
                                </ul>
                            </li>
                            <li>Template Type:
                                <ul>
                                    <li>Single, without any child tokens, for engagement rewards</li>
                                    <li>Hybrid, with a single parent and many possible child tokens, for certificates in paths of learning</li>
                                </ul>
                            </li>
                        </ul>

                        <p>Token Properties:</p>
                        <ul>
                            <li>Behavioral property, their value is determined through logic and calculation. Established and reviewed periodically by community consensus.</li>
                            <li>Transferable, for engagement rewards.</li>
                            <li>Non-transferable, for certificates of learning.</li>
                            <li>Indivisible/Whole, for rewards and certificates.</li>
                            <li>Mint-able, ability to issue new tokens for both types.</li>
                            <li>Role Support, ability to have roles defined to allow or prevent actions.</li>
                            <li>Burnable, ability to remove our Learning Tokens from the supply.</li>
                        </ul>

                        <p>Property-Set artifact: To be defined at workshop.</p>

                        <p>This Token Formula shall advance to a consensus definition of our Learning Token.</p></p>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Home;