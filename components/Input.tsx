import { Box, TextField } from '@radix-ui/themes'

interface InputProps extends React.ComponentProps<typeof TextField.Root> {
  maxWidth: string
}

function Input({ maxWidth, ...props }: InputProps) {
  return (
    <Box maxWidth={maxWidth}>
      <TextField.Root {...props} />
    </Box>
  )
}

export default Input
