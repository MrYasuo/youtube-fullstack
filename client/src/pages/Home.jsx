import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "../configs/axios";
const Container = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

const Home = ({ type }) => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		const fetchVideos = async () => {
			console.log(process.env.REACT_APP_NODE_ENV);
			console.log(axios);
			const res = await axios.get(`/videos/${type}`);
			setVideos(res.data);
		};
		fetchVideos();
	}, [type]);

	return (
		<Container>
			{videos.map((video) => (
				<Card key={video._id} video={video} />
			))}
		</Container>
	);
};

export default Home;
