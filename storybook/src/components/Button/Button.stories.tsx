import React from "react"
import { Button } from "./Button"

export default {
  title: "UI/Button",
  component: Button
}

const Template = (args: any) => <Button {...args}>ボタン</Button>

// 6つのストーリー
export const Default = Template.bind({})

export const FullWidth = Template.bind({})
FullWidth.args = { ...FullWidth.args, fullWidth: true }

export const Large = Template.bind({})
Large.args = { ...Large.args, size: 'large' }

export const Attention = Template.bind({})
Attention.args = { ...Attention.args, variant: 'attention' }

export const LoadingSmall = Template.bind({})
LoadingSmall.args = { ...LoadingSmall.args, size: 'small', loading: true }

export const Disabled = Template.bind({})
Disabled.args = { ...Disabled.args, disabled: true }
