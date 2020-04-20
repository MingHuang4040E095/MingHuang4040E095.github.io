<template>
  <el-card class="box-card margin-t-sm">
    <div slot="header" class="clearfix">
      <h2 class="margin-xs">{{ detail.name }}</h2>
    </div>
    <div class="margin-xs">電話: {{ detail.phone }}</div>
    <div class="margin-xs">地址: {{ detail.address }}</div>
    <div class="margin-xs">成人口罩: {{ detail.mask_adult }}</div>
    <div class="margin-xs">兒童口罩: {{ detail.mask_child }}</div>
    <div class="margin-xs">
      <div class="margin-xs">註記</div>
      <div class="margin-xs">{{ detail.note }}</div>
    </div>

    <el-table :data="tableData" style="width: 100%" :cell-style="cellStyle">
      <el-table-column prop="0" label="時段\星期" width="100">
      </el-table-column>
      <el-table-column prop="1" label="星期一"></el-table-column>
      <el-table-column prop="2" label="星期二"></el-table-column>
      <el-table-column prop="3" label="星期三"></el-table-column>
      <el-table-column prop="4" label="星期四"></el-table-column>
      <el-table-column prop="5" label="星期五"></el-table-column>
      <el-table-column prop="6" label="星期六"></el-table-column>
      <el-table-column prop="7" label="星期日"></el-table-column>
    </el-table>
    <div class="margin-xs">更新時間: {{ detail.updated }}</div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          0: "上午",
          1: "",
          2: "",
          3: "",
          4: "",
          5: "",
          6: "",
          7: ""
        },
        {
          0: "下午",
          1: "",
          2: "",
          3: "",
          4: "",
          5: "",
          6: "",
          7: ""
        },
        {
          0: "晚上",
          1: "",
          2: "",
          3: "",
          4: "",
          5: "",
          6: "",
          7: ""
        }
      ]
    };
  },
  computed: {
    detail() {
      return this.$store.state.detail;
    }
  },
  watch: {
    detail() {
      this.vistTime();
    }
  },
  methods: {
    vistTime() {
      // let tt = this.detail.available;
      // console.log(tt.replace(/、/g, "\n"));
      let timeList = this.detail.service_periods.split("");
      for (let i = 0; i <= timeList.length; i++) {
        if (i >= 0 && i <= 6) {
          if (timeList[i] == "Y") {
            this.tableData[0][i + 1] = "休診";
          } else if (timeList[i] == "N") {
            this.tableData[0][i + 1] = "看診";
          }
        } else if (i >= 7 && i <= 13) {
          if (timeList[i] == "Y") {
            this.tableData[1][i + 1 - 7] = "休診";
          } else if (timeList[i] == "N") {
            this.tableData[1][i + 1 - 7] = "看診";
          }
        } else if (i >= 14 && i <= 20) {
          if (timeList[i] == "Y") {
            this.tableData[2][i + 1 - 14] = "休診";
          } else if (timeList[i] == "N") {
            this.tableData[2][i + 1 - 14] = "看診";
          }
        }
      }
    },
    cellStyle({ row, column, rowIndex, columnIndex }) {
      let cellStyle;
      switch (row[columnIndex]) {
        case "看診":
          cellStyle = ";color:green";
          break;
        case "休診":
          cellStyle = ";color:red";
          break;
        default:
          cellStyle = "color: #828894";
      }
      return cellStyle;
    }
  },
  mounted() {
    this.vistTime();
  }
};
</script>
<style>
.box-card {
  border-radius: 10px;
}
.el-card__body {
  color: #828894;
}
.margin-xs {
  margin: 5px 0;
}
.margin-t-sm {
  margin: 10px 0;
}
.el-card__header {
  background-color: #fab1a0;
  color: #fff;
}
.has-gutter th {
  text-align: center !important;
}
.el-table__row > td {
  text-align: center !important;
}
</style>
