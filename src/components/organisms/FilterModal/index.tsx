import React, { useEffect, useRef } from "react"
import { Animated } from "react-native"
import { Modal } from "react-native-paper"

import AntDesign from "@expo/vector-icons/AntDesign"

import { Task } from "../../../shared/interfaces/Task"
import BaseButton from "../../atoms/BaseButton"
import Caption from "../../atoms/Caption"
import { CloseButton, FilterContainer } from "./styles"

interface FilterModalProps {
  isVisible: boolean
  onClose: () => void
  handleSubmit: (value: Task["status"]) => void
}

export const FilterModal = ({ isVisible, onClose, handleSubmit }: FilterModalProps) => {
  const translateY = useRef(new Animated.Value(1000)).current // Começa fora da tela

  useEffect(() => {
    if (isVisible) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }).start()
    } else {
      Animated.timing(translateY, {
        toValue: 1000,
        duration: 300,
        useNativeDriver: true
      }).start(onClose)
    }
  }, [isVisible])

  return (
    <Modal
      visible={isVisible}
      onDismiss={onClose}
      style={{
        height: "100%",
        justifyContent: "flex-end"
      }}
      contentContainerStyle={{
        flex: 1,
        justifyContent: "flex-end"
      }}
    >
      <Animated.View
        style={{
          transform: [{ translateY }],
          backgroundColor: "transparent",
          height: "100%",
          justifyContent: "flex-end"
        }}
      >
        <FilterContainer>
          <CloseButton onPress={onClose}>
            <AntDesign name="close" size={24} color="black" />
          </CloseButton>
          <Caption>TESTANDO</Caption>
          <BaseButton onPress={() => handleSubmit("done")}>
            <Caption
              style={{
                textAlign: "center"
              }}
            >
              Filtrar
            </Caption>
          </BaseButton>
        </FilterContainer>
      </Animated.View>
    </Modal>
  )
}
