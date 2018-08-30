<template>
<Header>
    <Menu @on-select="add" mode="horizontal" theme="dark" active-name="1">
        <div class="layout-nav">
            <MenuItem name="/">
                <Icon type="ios-navigate"></Icon>
                home
            </MenuItem>
            <MenuItem name="create">
                <Icon type="plus-circled"></Icon>
                创建接口
            </MenuItem>
            <MenuItem name="/about">
                <Icon type="ios-paper"></Icon>
                about
            </MenuItem>
        </div>
    </Menu>
</Header>
</template>
<script>
    export default {
      methods:{
        add(name){
            console.log(name)
            this.$router.push({
                path:name,
            });
        }
      }
    }
</script>