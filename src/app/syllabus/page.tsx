'use client'
import { Box, Center, Container, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Home from '../components/Home'
import { cards, core } from '../components/database'

export default function page() {
  return (
    <>
      <Home title='Syllabus' src='https://background.live/wp-content/uploads/2022/04/41613405958rhvilahlttorlzyz8umwdaek6npyr63gswnshyoalqcmdjkwzjxvtjvzmllqd3kbgrcmpza1j4w7bzbsvk3iishphloe71gpkg6t.jpg' />
      <Box pt='30px'>
        <Container maxW={1400}>
          <Center flexDir='column'>
            <Heading size='2xl'>Course Syllabus</Heading>
            <Text mt='20px' textAlign='center' px='130px'>The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each</Text>
          </Center>
          <Center flexDir='column' mt='20px'>
            <Heading>Common In All</Heading>
            <Text textAlign='center' px='130px'>Every participant of the program will start by completing the following three core courses</Text>
          </Center>
          
          <Center>
            <Flex mt='30px' gap='20px'>
              {core.map((elem) => ( 
              <Box textAlign='center' p='30px' boxShadow='dark-lg' borderRadius='20px' width='290px' key={elem.id}>
                <Heading>{elem.heading}</Heading>
                <Text pt='5px'>{elem.text}</Text>
              </Box>
              ))}
            </Flex>
          </Center>
        </Container>



        <Container maxW={1400} mt='30px' bgSize='cover' bgAttachment='fixed' bgImage='https://png.pngtree.com/background/20210709/original/pngtree-spray-powder-glare-colorful-background-picture-image_623477.jpg'>
          {cards.map((elem) => (
            <Box pt='40px' key={elem.id}>
              <Center flexDir='column' mt='50px'>
                <Heading size='xl'>{elem.heading1}</Heading>
                <Text fontWeight='medium' color='white' mt='20px' textAlign='center' px='130px'>{elem.text1}</Text>
              </Center>
              <Center>
                <Flex mt='30px' gap='20px'>
                  <Box bgColor='white' textAlign='center' p='50px' boxShadow='dark-lg' borderRadius='20px' width='350px'>
                    <Heading>{elem.heading2}</Heading>
                    <Text fontWeight='medium' pt='5px'>{elem.text2}</Text>
                  </Box>
                  <Box bgColor='white' textAlign='center' p='50px' boxShadow='dark-lg' borderRadius='20px' width='350px'>
                    <Heading>{elem.heading3}</Heading>
                    <Text fontWeight='medium' pt='5px'>{elem.text3}</Text>
                  </Box>
                </Flex>
              </Center>
            </Box>
          ))}


        </Container>
      </Box>

    </>
  )
}
