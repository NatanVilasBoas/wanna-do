import React, { useEffect, useRef, useState } from "react"
import { Animated, ScrollView, TouchableOpacity, View } from "react-native"
import { Modal } from "react-native-paper"

import AntDesign from "@expo/vector-icons/AntDesign"

import { Task } from "../../../shared/interfaces/Task"
import BaseButton from "../../atoms/BaseButton"
import BaseCheckbox from "../../atoms/BaseCheckbox"
import Caption from "../../atoms/Caption"
import Title from "../../atoms/Title"
import { CloseButton, FilterContainer } from "./styles"

interface FilterModalProps {
  isVisible: boolean
  onClose: () => void
  handleSubmit: (value?: Task["status"]) => void
}

export const FilterModal = ({ isVisible, onClose, handleSubmit }: FilterModalProps) => {
  const [filterValue, setFilterValue] = useState<undefined | Task["status"]>()
  const translateY = useRef(new Animated.Value(1000)).current // Começa fora da tela

  const submitFilter = () => {
    handleSubmit(filterValue)
    return onClose()
  }

  const handleToggle = (status: Task["status"]) => {
    if (status === filterValue) {
      setFilterValue(undefined)
    } else {
      setFilterValue(status)
    }
  }

  const clearFilter = () => {
    setFilterValue(undefined)
    handleSubmit()
    return onClose()
  }

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
          <Title>Filtros</Title>
          <View
            style={{
              height: "46%"
            }}
          >
            <ScrollView
              contentContainerStyle={{
                gap: 12
              }}
            >
              <BaseCheckbox message="A fazer" checked={filterValue === "todo"} onCheck={() => handleToggle("todo")} />
              <BaseCheckbox message="Fazendo" checked={filterValue === "doing"} onCheck={() => handleToggle("doing")} />
              <BaseCheckbox message="Feito" checked={filterValue === "done"} onCheck={() => handleToggle("done")} />
            </ScrollView>
          </View>
          <BaseButton
            onPress={() => submitFilter()}
            style={{
              marginBottom: 0
            }}
          >
            <Caption
              style={{
                textAlign: "center"
              }}
            >
              Filtrar
            </Caption>
          </BaseButton>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => clearFilter()}
            style={{
              marginTop: 12
            }}
          >
            <Caption
              style={{
                textAlign: "center",
                textDecorationLine: "underline"
              }}
            >
              Limpar filtro
            </Caption>
          </TouchableOpacity>
        </FilterContainer>
      </Animated.View>
    </Modal>
  )
}
