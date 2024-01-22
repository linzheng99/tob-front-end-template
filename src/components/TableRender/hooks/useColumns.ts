import { computed } from "vue"
import { TableBasicProps } from "../types"

export const useColumns = (props: TableBasicProps) => {

  const { columns } = props

  const getColumns = computed(() => {
    console.log(columns);
    
    return columns
  })

  return {
    getColumns
  }
}
