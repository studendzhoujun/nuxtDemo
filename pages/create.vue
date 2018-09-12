<template>
  <ve-line :data="chartData"></ve-line>
</template>

<script>
import VeLine from 'v-charts/lib/line.common'

  export default {
    data: function () {
      return {
        chartData: {
          columns: ['日期', '支出',],
          rows: [
            { '日期': '1/1', '支出': 1393,   },
            { '日期': '1/2', '支出': 3530,  },
            { '日期': '1/3', '支出': 2923,  },
            { '日期': '1/4', '支出': 1723,   },
            { '日期': '1/5', '支出': 3792,  },
            { '日期': '1/6', '支出': 4593,  },
            { '日期': '1/7', '支出': 459,  },
            { '日期': '1/8', '支出': 45,  },
            { '日期': '1/9', '支出': 493,  }

          ]
        }
      }
    }
  }
</script>
<style scoped>
.create{
    height:300px;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
}
</style>
