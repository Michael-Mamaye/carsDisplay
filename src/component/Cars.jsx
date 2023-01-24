import { Box, Button, CircularProgress, Grid } from "@mui/material";
import { useState } from "react";
import { useQuery } from "react-query";
import { getCarsData } from "../controller/GetDataController";

const Cars = () => {
	const [imageChange, setImageChange] = useState(0);
	const [page, setPage] = useState(1);
	const { isLoading, data: carsData } = useQuery(
		["theCarsList", page],
		() => getCarsData(page),
		{ keepPreviousData: true }
	);
	setInterval(() => {
		if (imageChange + 1 === 3) {
			return setImageChange(0);
		} else if (imageChange >= 0) {
			return setImageChange(imageChange + 1);
		}
	}, 20000);

	if (isLoading) {
		return (
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					pt: 10,
				}}>
				<CircularProgress />
			</Box>
		);
	}
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				pt: 10,
			}}>
			<Grid container spacing={2} sx={{ width: "90%", height: "90%" }}>
				{carsData?.cars?.map((item) => {
					return (
						<Grid item xs={6} md={4} key={item.id} sx={{ height: "400" }}>
							<div class="container">
								<img
									src={item.images[imageChange]}
									alt="Avatar"
									class="image"
								/>
								<div class="overlay">
									<div class="text">
										<p>{item.carName}</p>
										<p>{item.carPrice}</p>
									</div>
								</div>
							</div>
						</Grid>
					);
				})}
			</Grid>
			<Button
				onClick={() => setPage(page + 1)}
				sx={{ m: 10, width: "100%", fontWeight: "bold", color: "#72a24d" }}>
				Load More
			</Button>
		</Box>
	);
};

export default Cars;
