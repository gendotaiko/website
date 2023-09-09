import React from 'react';
import { Grid, Typography} from '@mui/material';

// import PastMember from '../components/PastMember';
import CurrentGen from '../components/CurrentGen';
import currGenData from '../current_members.json';
// import pastGenData from '../past_members.json';

const currGenList = currGenData.current_members;
// const pastGenList = pastGenData.past_members;

const Members = () => {

	return (
		<Grid container
			pt={{ xs: 4, lg: 8 }} 
			pb={{ xs: 2, lg: 4 }}
			direction='column'
			alignItems='center'
		>
			{/* Current members */}
			<Grid item>
				<Typography variant='h1' pb={{ xs: 2, lg: 4 }}>CURRENT MEMBERS</Typography>
				{/* All gens container */}
				<Grid container direction='column' alignItems='center'>
					{
						// Maps through each gen
						currGenList.map((gen, index) =>
							<Grid container direction='column' alignItems='center' key={index} xs={12} md={12} lg={12} >
								<Typography variant='current'>{gen.english} {gen.japanese}</Typography>
								<CurrentGen members={gen.members} />
							</Grid>
						)
					}
				</Grid>
			</Grid>
			{/* Previous members */}
			<Grid item>
				<Typography variant='h1' pb={{ xs: 2, lg: 4 }}>PREVIOUS MEMBERS</Typography>
			</Grid>
		</Grid>
	);
};

export default Members;

// <Box px={{ xs: 2, lg: 12, xl: 16 }} pt={{ xs: 4, lg: 8 }} pb={{ xs: 2, lg: 4 }}>
// 	<Typography variant='h1' pb={{ xs: 2, lg: 4 }}>CURRENT MEMBERS</Typography>
// 	<Box p={{ md: 8}} alignItems='center'>
// 		{
// 			currGenList.map((gen, index) => 
// 				<Box key={index}>
// 					<Typography variant='current'>{gen.english} {gen.japanese}</Typography>
// 					<CurrentMember members={gen.members} />
// 				</Box>)
// 		}
// 	</Box>

// 	<Typography variant='h1'>PAST MEMBERS</Typography>
// 	<Box display='flex' p={8} alignItems='center' flexDirection='column'>
// 		<Grid container spacing={2}>
// 			{
// 				pastGenList.map((gen, index) =>
// 					<Grid item key={index} xs={12} md={4} lg={3}>
// 						<PastMember english={gen.english} japanese={gen.japanese} members={gen.members} />
// 					</Grid>
// 				)
// 			}
// 		</Grid>
// 	</Box>
// </Box>