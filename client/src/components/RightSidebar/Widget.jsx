import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/comment-alt-solid.svg'
import blacklogo from '../../assets/blacklogo.svg'
import pen from '../../assets/pen-solid.svg'

const Widget = () => {
    return (
        <div className="widget">
            <h4>The Overflow blog</h4>
            <div className="right-sidebar-div-1">
                <div className="right-sidebar-div-2">
                    <img src={pen} alt="pen" width='12' />
                    <p>Fighting to balance identity and anonymity on the web(3) (Ep. 504)</p>
                </div>
                <div className="right-sidebar-div-2">
                    <img src={pen} alt="pen" width='12' />
                    <p>Hashgraph: The sustainable alternative to blockchain</p>
                </div>

            </div>
            <h4>Featured on Meta</h4>
            <div className="right-sidebar-div-1">
                <div className="right-sidebar-div-2">
                    <img src={comment} alt="comment" width='12' />
                    <p>Mobile app infrastructure being decommissioned</p>
                </div>
                <div className="right-sidebar-div-2">
                    <img src={comment} alt="comment" width='12' />
                    <p>The Ask Wizard (2022) has graduated and went for doing another degree</p>
                </div>
                <div className="right-sidebar-div-2">
                    <img src={blacklogo} alt="blacklogo" width='12' />
                    <p>Staging Ground Workflow: Canned Comments</p>
                </div>

            </div>
            <h4>Hot Meta Posts</h4>
            <div className="right-sidebar-div-1">
                <div className="right-sidebar-div-2">
                    <p>19</p>
                    <p>User keeps posting blatantly off-topic answers - what to do?</p>
                </div>
                <div className="right-sidebar-div-2">
                    <p>28</p>
                    <p>Hashgraph: The sustainable alternative to blockchain</p>
                </div>
            </div>
        </div>
    )
}

export default Widget