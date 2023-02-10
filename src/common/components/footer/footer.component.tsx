import {
  Box,
  Grid,
  List,
  ListItem,
  ListSubheader,
  Typography,
  Container,
  Link,
} from "@mui/material";
import { styled } from "@mui/system";
import { Link as NextjsLink } from "next/link";
import { MenuItem } from "@/modules/menu/menu.type";

const FooterListSubheader = styled(ListSubheader)`
  background: transparent;
  font-size: 1.17rem;
`;
const FooterLisItem = styled(ListItem)`
  padding-top: 0;
`;

const MainFooter: React.FC = ({}) => {
  const menu1: MenuItem[] = [
    { title: "About us", path: "/about-us" },
    { title: "Blog", path: "/blog" },
    { title: "support", path: "/support" },
    { title: "Terms of service", path: "/privacy" },
    { title: "contact", path: "/contact" },
  ];
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={3}>
          <Typography variant="h3" sx={{ fontSize: "1.2rem" }}>
            Links
          </Typography>
        </Grid>
        <Grid sm={12} md={9} justifyContent="flex-end" sx={{ display: "flex" }}>
          <Grid sm={12} md={4}>
            <List>
              <FooterListSubheader component="h3" color="inherit">
                Links
              </FooterListSubheader>

              {menu1.map((item, key) => (
                <FooterLisItem key={key}>
                  <Link
                    component={NextjsLink}
                    variant="body2"
                    color="inherit"
                    underline="hover"
                    href={item.path}
                    title={item.title}
                  >
                    {item.title}
                  </Link>
                </FooterLisItem>
              ))}
            </List>
          </Grid>
          <Grid sm={12} md={4}>
            <List>
              <FooterListSubheader component="h3" color="inherit">
                Links
              </FooterListSubheader>
              {menu1.map((item, key) => (
                <FooterLisItem key={key}>
                  <Link
                    component={NextjsLink}
                    variant="body2"
                    color="inherit"
                    underline="hover"
                    href={item.path}
                    title={item.title}
                  >
                    {item.title}
                  </Link>
                </FooterLisItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
const SocialFooter = () => (
  <Box sx={{}}>
    <Typography
      variant="body2"
      textAlign="center"
      sx={{
        mt: "2rem",
        display: "block",
      }}
    >
      Conformément à la Directive 2006/112/CE modifiée, à partir du 01/01/2015,
      les prix TTC sont susceptibles de varier selon le pays de résidence du
      client (par défaut les prix TTC affichés incluent la TVA française en
      vigueur
    </Typography>
  </Box>
);
const LegalFooter = () => (
  <Box sx={{}}>
    <Container maxWidth="md">
      <Typography
        textAlign="center"
        variant="caption"
        sx={{
          mt: "1rem",
          display: "block",
        }}
      >
        © 2023 Title. All rights reserved.
      </Typography>
    </Container>
  </Box>
);

export const Footer: React.FC = ({}) => {
  return (
    <Box
      sx={{ flexGrow: 1, borderTop: 1, borderColor: "grey.200", py: "2rem" }}
    >
      <Container maxWidth="md">
        <MainFooter />
      </Container>
      <Container maxWidth="md">
        <SocialFooter />
      </Container>
      <LegalFooter />
    </Box>
  );
};
