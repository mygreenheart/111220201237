import React, { useState, useEffect } from 'react'
import "./Comments.css"
import likeIcon from "../../imgs/like.png"
import commentIcon from "../../imgs/comment.png"
import CommentsData from "../../data/comments.json"

import moment from 'moment'
import russianLocale from "moment/locale/ru";

export default function Comments() {
    const [commentsData, setCommentsData] = useState(CommentsData);
    const [commentValue, setcommentValue] = useState("");

    const date = moment()
    date.locale('ru', russianLocale);




    return (
        <>
            <div className="comments-header">
                <div className="comments-links">
                    <a href="#">Последние отзывы</a>
                    <a href="#">Все отзывы</a>
                </div>
                <div className="comments-icons">
                    <div>
                        <img src={likeIcon} alt="like" />
                        131
                    </div>
                    <div>
                        <img src={commentIcon} alt="comment" />
                        14
                    </div>
                </div>
            </div>
            <div className="comments-container">
                <div className="comments-data">
                    {commentsData.map(comment => {
                        return (
                            <div key={comment.uuid} className="comment">
                                <div className="comment-info">
                                    <div className="comment-name">{comment.sender_name}</div>
                                    <div className="comment-date">{comment.date}</div>
                                </div>
                                <div className="comment-content">
                                    <div>{comment.content}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="input-container">
                <div>
                    <input type="text" value={commentValue}
                        onInput={e => setcommentValue(e.target.value)}
                        onKeyDown={e => {
                            if (commentValue.length > 0) {
                                if (e.ctrlKey && e.key === "Enter") {
                                    setCommentsData(prev => [...prev, { "sender_name": "Вы", "date": date.format('LL'), content: commentValue }])
                                }
                            }

                        }}
                    />
                </div>
                <div>
                    <button
                        onClick={() => {
                            if (commentValue.length > 0) {
                                setCommentsData(prev => [...prev, { "sender_name": "Вы", "date": date.format('LL'), content: commentValue }])
                            }
                        }}>
                        Написать консультанту</button>
                </div>
            </div>
        </>

    )
}
