import React from "react"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Feed from "./Feed";
import { Button, Text, Flex, Center } from "@chakra-ui/react";

export default function Search() {
    let params = useParams();
     function go(direction){
        window.location.href=(`/search/${params.regexp}/${params.amount}/${(parseInt(params.page) + direction)}`)
    }
    return <>
        <Flex>
            <Button onClick={()=>go(-1)}>⬅️</Button>
            <Center>
                <Text>{params.page}</Text>
            </Center>
            <Button onClick={()=>go(1)}>➡️</Button>
        </Flex>            
        <Feed type="search" regexp={params.regexp} amount={params.amount} page={1} />
    </>
}