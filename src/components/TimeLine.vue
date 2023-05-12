<template>
  <div class="tlContent">
    <div class="inProgress">
      <div class="tableTitle">进行中</div>
      <div class="tableContent">
        <div class="myTable">
          <a-table
            :columns="columns"
            :data-source="data"
            :expandIcon="expandIcon"
          >
            <a slot="action" slot-scope="text" href="javascript:;">Delete</a>
            <p slot="expandedRowRender" slot-scope="record" style="margin: 0">
              {{ record.description }}
            </p>
          </a-table>
        </div>
      </div>
    </div>
    <!-- <div class="finished">
      <div class="tableTitle">已结束</div>
    </div> -->
  </div>
</template>

<script>
const columns = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Age", dataIndex: "age", key: "age" },
  { title: "Address", dataIndex: "address", key: "address" },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    scopedSlots: { customRender: "action" },
  },
];

const data = [
  {
    key: 1,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    description:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
  },
  {
    key: 2,
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    description:
      "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
  },
  {
    key: 3,
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    description:
      "My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.",
  },
];
export default {
  data() {
    return {
      data,
      columns,
    };
  },
  methods: {
    expandIcon(props) {
      if (props.expanded) {
        return (
          <a
            style="color: 'black',margin-right:0px"
            onClick={(e) => {
              props.onExpand(props.record, e);
            }}
          >
            <a-icon type="down" />{" "}
          </a>
        );
      } else {
        return (
          <a
            style="color: 'black' ,margin-right:0px"
            onClick={(e) => {
              props.onExpand(props.record, e);
            }}
          >
            <a-icon type="right" />
          </a>
        );
      }
    },
  },
};
</script>

<style lang="less" scoped>
.tlContent {
  width: 100%;

  .inProgress {
    margin: 20px;

    .tableTitle {
      height: 40px;
      line-height: 40px;
      background-color: #fff;
      margin-bottom: 3px;
      color: rgba(0, 0, 0, 0.8);
      font-size: 14px;
      font-weight: 700;
      text-overflow: ellipsis;
      padding: 0 24px;
      // border-bottom: 1px solid rgba(31, 56, 88, 0.1);
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }

    .tableContent {
      background-color: #fff;

      .myTable {
        padding: 20px;
      }
    }
  }
}
</style>
