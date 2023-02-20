import { Box, Button, Container, Flex, Heading, Text, Image } from '@chakra-ui/react'
// import Image from 'next/image'
import png from '../../../public/logo2.webp'
import { RevealWrapper } from 'next-reveal'

export default function Banner() {
    return (
        <>
            <Box bgAttachment='fixed' bgImage='https://static.vecteezy.com/system/resources/previews/005/152/375/original/modern-futuristic-neon-purple-background-free-vector.jpg'>
                <RevealWrapper origin='left' delay={200} duration={3000} distance='500px' reset={true}>
                    <Container maxW={1400}>
                        <Flex pt={{ lg: '150px', base: '30px' }} pb={{ lg: '100px', base: '0' }} px={{ lg: '40px', base: '5px' }} display={{ lg: 'flex', base: 'grid' }}>
                            <Box flexBasis={{ lg: '50%', base: '%' }} px={{ lg: '40px', base: '0' }}>
                                <Heading color='black' size='2xl'>Prepare yourself for the Next Generation of Internet with Panaverse</Heading>
                                <Text pt='10px'>One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</Text>
                                <Button mt='10px' size='lg' colorScheme='teal'>More Info</Button>
                            </Box>
                            <Box mt={{ lg: '-80px', base: '0' }} flexBasis='50%'>
                                <Image src='/logo2.webp' alt="Panaverse" width={{ lg: '700', base: '400' }} height={{ lg: '400', base: '300px' }} />
                            </Box>
                        </Flex>

                    </Container>
                </RevealWrapper>

            </Box>

            <Box>
                <Container maxW={1400}>
                    <Flex gap={{ lg: '100px', base: '10px' }} display={{ lg: 'flex', base: 'grid' }}>
                        <Box flexBasis='50%'>
                            <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
                                <Image src='/logo2.webp' alt="Panaverse" width={{ lg: '700', base: '100' }} height={{ lg: '400', base: '200' }} />
                            </RevealWrapper>
                        </Box>
                        <Box flexBasis='50%' pt={{ lg: '80px', base: '10px' }} px={{ lg: '0', base: '5px' }}>
                            <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}>
                                <Heading size='2xl'>Program Of Studies</Heading>
                                <Text pr={{ lg: '50px', base: "25px" }} pt='10px'>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</Text>
                                <Button mt='10px' size='lg' colorScheme='teal'>Read More</Button>
                            </RevealWrapper>
                        </Box>
                    </Flex>
                </Container>
            </Box>
            <Box>
                <Container maxW={1400}>
                    <Flex gap={{ lg: '100px', base: '10px' }} display={{ lg: 'flex', base: 'grid' }}>
                        <Box flexBasis='50%' pl={{ lg: '60px', base: '5px' }} pt={{ lg: '80px', base: '30px' }}>
                            <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
                                <Heading size='2xl'>Program Of Studies</Heading>
                                <Text pr={{ lg: '50px', base: "25px" }} pt='10px'>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</Text>
                                <Button mt='10px' size='lg' colorScheme='teal'>Read More</Button>
                            </RevealWrapper>
                        </Box>
                        <Box flexBasis='50%'>
                            <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}>
                                <Image src='/logo2.webp' alt="Panaverse" width={{ lg: '700', base: '100' }} height={{ lg: '400', base: '200' }} />
                            </RevealWrapper>
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </>
    )
}
