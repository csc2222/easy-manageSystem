<template>
    <div class="header-container">
        <div class="l-content">
            <el-button @click="handleMenu" icon="el-icon-menu" size="mini"></el-button>
            <!-- 面包屑 -->
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{ item.lable }}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img class="user" src="../assets/image/user.png">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {}
    },
    methods: {
        handleMenu() {
            this.$store.commit('collapseMenu')
        }
    },
    computed: {
        ...mapState({
            tags: state => state.tab.tabList
        })
    }
}
</script>

<style lang="less" scoped>
.header-container {
    background-color: #333;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 30px;

    .text {
        color: #fff;
        font-size: 14px;
        margin-left: 20px;
    }

    .r-content {
        .user {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            padding-right: 20px;
        }
    }

    .l-content {
        display: flex;
        align-items: center;

        /deep/.el-breadcrumb__item {
            .el-breadcrumb__inner {
                font-weight: normal;
                color: white;
                margin-left: 10px;
            }
            &:last-child{
                .el-breadcrumb__inner{
                    color: #fff;
                }
            }
        }
    }
}
</style>