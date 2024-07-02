import { Text } from 'react-native'

export function Title({ title }: { title: string}) {
  return (
      <Text className='w-full text-white text-xl font-subtitle'>
        {title}
      </Text>
  )
}