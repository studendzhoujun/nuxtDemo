<template>
   <section class="layout">
        <Content :style="{padding: '0 50px'}">
            <Breadcrumb :style="{margin: '10px 20px'}">
                <BreadcrumbItem>接口列表</BreadcrumbItem>
            </Breadcrumb>
            <Card :shadow="true" :padding="20">
                 <Table :columns="columns1" :data="data1"></Table>                
            </Card>
        </Content>
    </section>
</template>

<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    border-radius: 4px;
}
</style>
<script>
    import {mapState} from 'vuex'
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: 'Method',
                        key: 'method'
                    },
                    {
                        title: 'Url',
                        key: 'url'
                    },
                    {
                        title: '描述',
                        key: 'discrition'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                            }
                    }
                ],
                data1: [
                    {
                        method: 'get',
                        url: '/getName',
                        discrition: '获取姓名',
                    },
                    {
                        method: 'get',
                        url: '/getName',
                        discrition: '获取姓名',
                    },
                    {
                        method: 'get',
                        url: '/getName',
                        discrition: '获取姓名',
                    },
                    {
                        method: 'get',
                        url: '/getName',
                        discrition: '获取姓名',
                    },
                    {
                        method: 'get',
                        url: '/getName',
                        discrition: '获取姓名',
                    },
                    {
                        method: 'get',
                        url: '/getName',
                        discrition: '获取姓名',
                    },
                    {
                        method: 'get',
                        url: '/getName',
                        discrition: '获取姓名',
                    },
                    {
                        method: 'get',
                        url: '/getName',
                        discrition: '获取姓名',
                    },
                ]
            }
      },
      computed:mapState([
        'name'
      ]),
      methods:{
        add(){
          // this.$store.commit('increment')
          this.$store.dispatch('goAbout')
        },
        show (index) {
              this.$Modal.info({
                  title: 'User Info',
                  content: `method：${this.data1[index].method}<br>url：${this.data1[index].url}<br>discrition：${this.data1[index].discrition}`
              })
            },
        remove (index) {
            this.data1.splice(index, 1);
        }
      }
    }
</script>
