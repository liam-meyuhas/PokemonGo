import { Text} from "native-base"
import React from "react"

const CaptureDate:React.FC<{captureDate: Date}> = ({captureDate}) => {
    return ( <>
   <Text fontSize="xs" color="#93F0F2">
        תאריך תפיסה:
      </Text>
      <Text fontSize="xs" color="#93F0F2">
        {new Date(captureDate).toLocaleString()}
      </Text> </>)
}
export default CaptureDate