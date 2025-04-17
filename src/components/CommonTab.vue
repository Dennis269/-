<template> 
    <div class="tags">
        <!--closable是否有关闭按钮,hoem标签不能关闭所以为false
			effect主题，找到当前路由对应的tab，设置'dark'高亮主题
		-->
      <el-tag
       
        v-for="(tag, index) in tags"
         :key="tag.name"
        :closable="tag.name !== 'home'"
        :effect="route.name === tag.name ? 'dark' : 'plain'"
       @click="handleMenu(tag)"
       @close="handleClose(tag,index)"
      >
        {{ tag.label }}
      </el-tag>
    </div>
</template>

<script setup>

import {ref,computed} from 'vue'
import {useRoute,useRouter} from 'vue-router'
import { useAllDataStore } from '@/stores'
const store = useAllDataStore()
const tags = computed(()=>store.state.tags)
const route = useRoute()
const router = useRouter()

const handleMenu = (tag)=>{
 router.push(tag.name)
 store.selecttMenu(tag)
}

const handleClose = (tag,index)=>{
  store.updateTags(tag)
  if(tag.name !== route.name){
    return
  }
  if(index === store.state.tags.length){
  store.selecttMenu(tags.value[index-1])
  router.push(tags.value[index-1].name)
  }else{
    store.selecttMenu(tags.value[index])
    router.push(tags.value[index].name)
  }
}
</script>

<style lang="less" scoped>
.tags{
  margin: 20px 0 0 20px;
}
.el-tag{
  margin-right: 10px;
}
</style>
