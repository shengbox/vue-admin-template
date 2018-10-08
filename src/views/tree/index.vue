<template>
  <div class="app-container">
    <el-input v-model="filterText" placeholder="Filter keyword" style="margin-bottom:30px;" />

    <el-tree
      ref="tree2"
      :default-expanded-keys="[138]"
      :data="data2"
      :props="defaultProps"
      :filter-node-method="filterNode"
      node-key="id"
      show-checkbox
      class="filter-tree"
    />

  </div>
</template>

<script>
import { getTree } from '@/api/table'

export default {

  data() {
    return {
      filterText: '',
      data2: [{
        id: 1,
        label: 'Level one 1',
        children: [{
          id: 4,
          label: 'Level two 1-1',
          children: [{
            id: 9,
            label: 'Level three 1-1-1'
          }, {
            id: 10,
            label: 'Level three 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: 'Level one 2',
        children: [{
          id: 5,
          label: 'Level two 2-1'
        }, {
          id: 6,
          label: 'Level two 2-2'
        }]
      }, {
        id: 3,
        label: 'Level one 3',
        children: [{
          id: 7,
          label: 'Level two 3-1'
        }, {
          id: 8,
          label: 'Level two 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val)
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    fetchData() {
      getTree('this.listQuery').then(response => {
        const data = response.data
        const treeMap = {}
        for (const i in data) {
          const item = { id: data[i].id, label: data[i].text, parentId: data[i].parentId, children: [] }
          treeMap[data[i].id] = item
        }
        for (const key in treeMap) {
          if (treeMap[treeMap[key].parentId]) {
            treeMap[treeMap[key].parentId].children.push(treeMap[key])
          }
        }
        this.data2 = [treeMap[1]]
      })
    }
  }
}
</script>

