<template>
  <div>
    <!-- 卡片区域  -->
    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容" clearable>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4"
          ><el-button type="primary">添加商品</el-button></el-col
        >
      </el-row>
      <!-- table表格区域 -->
      <el-table :data="goodsData">
        <el-table-column label="商品ID" prop="goods_id"> </el-table-column>
        <el-table-column label="商品名称" prop="goods_name"> </el-table-column>
        <el-table-column label="商品价格" prop="goods_price"> </el-table-column>
        <el-table-column label="创建时间" prop="goods_time"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              @click="dialogVisible=true"
            >
            </el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="handleDelete(scope.row)"
            >
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 对话框区域 -->
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="50%"
      >
        <span>选择地址</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
      <!-- 分页区域 -->
      <el-pagination
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000"
        style="text-align: center"
        background
      >
      </el-pagination>
    </el-card>
  </div>
</template>
<script>
import { getData, delGood } from "@/api";
export default {
  data() {
    return {
      //商品列表
      goodsData: [],
      dialogVisible: false
    };
  },
  mounted() {
    getData().then(({ data }) => {
      const { goodsData } = data.data;
      console.log(goodsData);
      this.goodsData = goodsData;
      this.$message.success("获取商品列表成功");
    });
  },
  methods: {
    handleDelete(row) {
      this.$confirm("此操作将永久删除该商品, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          delGood({ id: row.id }).then(() => {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
  //修改地址对话框
  showBox(done) {
    this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
};
</script>

<style lang="less" scoped>
</style>