import { Card, Center, Container, createStyles, Stack, Text, Title } from '@mantine/core'
import React from 'react'

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    minHeight: 650,
  }
}));

const Home = () => {
  const { classes } = useStyles();
  return (
    <Container size='xs' className={classes.wrapper}>
      <Center>
        <Stack justify='center'>
          <Title>Trivia Master</Title>
          <Card shadow='xs' withBorder>
            <Text>Home</Text>
          </Card>
        </Stack>
      </Center>
    </Container>
  )
}

export default Home
