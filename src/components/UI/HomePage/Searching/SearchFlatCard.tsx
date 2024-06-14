"use client";
import { formatLocalDate } from "@/components/Shared/Date&Time/Date";
import { useGetAllFlatQuery } from "@/redux/api/flatApi";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SearchFlatCard = () => {
  const { data: flatData, isLoading } = useGetAllFlatQuery({});

  return (
    <Box textAlign="center">
      <Container sx={{ margin: "80px auto 50px auto" }}>
        <Grid container spacing={2}>
          {flatData?.slice(0, 3)?.map((item: any) => (
            <Card
              key={item.id}
              sx={{ maxWidth: 345, margin: "auto", marginBottom: "20px" }}
            >
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: purple[700] }}
                    aria-label="recipe"
                  ></Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={
                  item?.flatName?.length > 28
                    ? item?.flatName.substring(0, 28) + "..."
                    : item?.flatName
                }
                subheader={formatLocalDate(item?.createdAt)}
              />
              <CardMedia
                component="img"
                height="194"
                image={item?.flatPhoto}
                alt="Paella dish"
              />
              <CardContent>
                <Tooltip title={item?.description} arrow>
                  <Typography variant="body2" color="text.secondary">
                    {item?.description?.length > 170
                      ? item?.description.substring(0, 170) + "..."
                      : item?.description}
                  </Typography>
                </Tooltip>
              </CardContent>
              <Box margin="0" padding="0 10px">
                <Typography textAlign="start">
                  Price: {item?.rent} TK
                </Typography>

                <Box>
                  <Typography textAlign="start">
                    Bedrooms: {item?.totalBedrooms}
                  </Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                padding="0 10px 10px 5px"
              >
                <Box display="flex" alignItems="center">
                  <LocationOnIcon />
                  <Typography>{item?.location}</Typography>
                </Box>

                <Box>
                  <Link href={`/flats/${item.id}`}>
                    <Button variant="contained">Details</Button>
                  </Link>
                </Box>
              </Box>
            </Card>
          ))}
        </Grid>
        <Button href="/flats" sx={{ marginTop: "15px" }} variant="outlined">
          View All
        </Button>
      </Container>
    </Box>
  );
};

export default SearchFlatCard;
