import { Box, Container, Heading, Center, Flex, Image, Text } from '@chakra-ui/react'
import { data } from '../components/database'

export default function Instructors() {
    return (
        <Box>
            <Container maxW={1400}>
                <Center>
                    <Heading>Our Instructors</Heading>
                </Center>
                <Flex flexDir='row'>
                    {data.map((ins) => (
                        <Box key={ins.id}>
                            <Center >
                                <Image borderRadius='full' width={90} height={90} src={ins.src} />
                            </Center>
                            <Heading textAlign='center' size='md'>{ins.heading}</Heading>
                            <Text px='30px' fontSize='sm' textAlign='center'>{ins.text}</Text>
                        </Box>
                    ))}
                </Flex>
            </Container>
        </Box>
    )
}
