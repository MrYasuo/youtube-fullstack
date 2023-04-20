import axios from "../configs/axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Comment from "./Comment";

const Container = styled.div``;

const NewComment = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

const Avatar = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
`;

const Input = styled.input`
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.soft};
	color: ${({ theme }) => theme.text};
	background-color: transparent;
	outline: none;
	padding: 5px;
	width: 100%;
`;

const Comments = ({ videoId }) => {
	const { currentUser } = useSelector((state) => state.user);
	const [comment, setComment] = useState("");

	const [comments, setComments] = useState([]);

	useEffect(() => {
		const fetchComments = async () => {
			try {
				const res = await axios.get(`/comments/${videoId}`);
				setComments(res.data);
			} catch (err) {}
		};
		fetchComments();
	}, [videoId]);

	//TODO: ADD NEW COMMENT FUNCTIONALITY

	return (
		<Container>
			{currentUser && (
				<NewComment>
					<Avatar src={currentUser.img} referrerPolicy="no-referrer" />
					<Input
						placeholder="Add a comment..."
						value={comment}
						onChange={(e) => setComment(e.target.value)}
						onKeyDown={async (e) => {
							if (e.key === "Enter") {
								const res = await axios.post("/comments", {
									videoId,
									userId: currentUser._id,
									desc: comment,
								});
								const newComment = res.data;
								setComment("");
								setComments([...comments, newComment]);
							}
						}}
					/>
				</NewComment>
			)}
			{comments.map((comment) => (
				<Comment key={comment._id} comment={comment} />
			))}
		</Container>
	);
};

export default Comments;
