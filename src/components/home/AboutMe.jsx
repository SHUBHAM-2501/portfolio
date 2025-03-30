import { Container, Typography, Box, Grid, Paper, Chip } from "@mui/material";
import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import BrushIcon from "@mui/icons-material/Brush";
import DevicesIcon from "@mui/icons-material/Devices";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export default function AboutMe() {
  // Key areas of expertise
  const expertise = [
    {
      title: "Web Development",
      icon: CodeIcon,
      description:
        "Building responsive and performant web applications using modern frameworks and technologies.",
    },
    {
      title: "AI-powered Development",
      icon: AutoAwesomeIcon,
      description:
        "Skilled in crafting effective AI prompts to generate accurate, insightful, and optimized outputs for various applications.",
    },
   
    {
      title: "Responsive Design",
      icon: DevicesIcon,
      description:
        "Developing websites that look great on all devices, from desktops to smartphones.",
    },
    {
      title: "UI/UX Design",
      icon: BrushIcon,
      description:
        "Creating intuitive and visually appealing user interfaces with a focus on user experience.",
    },
  ];

  // Animation variants for staggered children
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[50]
            : theme.palette.background.paper,
      }}
      component="section"
      id="about"
    >
      <Container maxWidth="lg">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            gutterBottom
            sx={{ mb: 2 }}
          >
            About Me
          </Typography>
          <Box
            sx={{
              width: 60,
              height: 4,
              backgroundColor: "primary.main",
              mx: "auto",
              mb: 4,
            }}
          />
        </motion.div>

        {/* About text */}
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="body1" paragraph>
                I’m a passionate MERN Stack Developer skilled in Node.js,
                React.js, Redux, Express.js, and RESTful APIs, with proficiency
                in using AI tools to enhance web application development. I
                specialize in building scalable and efficient solutions,
                ensuring seamless user experiences with clean and maintainable
                code. With strong problem-solving abilities, I enjoy tackling
                complex challenges and optimizing performance. Constantly
                learning and adapting to new technologies, I strive to create
                innovative and impactful digital solutions. Let’s connect and
                build something great!
              </Typography>
              {/* <Typography variant="body1" paragraph>
                My approach combines clean code, modern design principles, and performance optimization to create 
                applications that not only look great but also function smoothly.
              </Typography>
              <Typography variant="body1" paragraph>
                I specialize in React.js for building interactive user interfaces, along with Material UI and 
                Tailwind CSS for styling. I'm also experienced with backend technologies and database management.
              </Typography> */}

              <Box sx={{ mt: 3, display: "flex", flexWrap: "wrap", gap: 1 }}>
                {[
                  "JavaScript",
                  "React.js",
                  "Redux",
                  "Node.js",
                  "Express.js",
                  "Material UI",
                  "Tailwind CSS",
                  "MongoDB",
                  "REST APIs",
                  "Git & GitHub",
                  "AI Tools",
                  "Problem Solving",
                  
                ].map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Expertise cards */}
          <Grid item xs={12} md={6}>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {expertise.map((item, index) => (
                <motion.div key={item.title} variants={item}>
                  <Paper
                    sx={{
                      p: 3,
                      mb: 2,
                      display: "flex",
                      alignItems: "flex-start",
                      borderLeft: 4,
                      borderColor: "primary.main",
                    }}
                    elevation={2}
                  >
                    <Box sx={{ mr: 2, color: "primary.main" }}>
                      <item.icon fontSize="large" />
                    </Box>
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Box>
                  </Paper>
                </motion.div>
              ))}
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
