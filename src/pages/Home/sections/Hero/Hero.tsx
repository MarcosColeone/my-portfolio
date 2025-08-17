import { Container, Button, styled, Typography, Grid } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.png";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh",
  }));

  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth = "lg"> 
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <StyledImg src={Avatar} />
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <Typography color="primary" variant="h1" textAlign="center">
                Marcos
              </Typography>
              <Typography color="primary" variant="h2" textAlign="center">
                Im a Computer Science
              </Typography>

              <Button startIcon={<DownloadIcon />}>
                Download CV
              </Button>
              <Button startIcon={<EmailIcon />}>
                Contact Me
              </Button>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
