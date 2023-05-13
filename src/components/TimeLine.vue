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
            <a slot="action" slot-scope="text, record">
              <a @click="updateProgress(text, record)">更新流程</a>
              <a-divider type="vertical"></a-divider>
              <a @click="updateStatus(text, record)">更新状态</a>
              <a-divider type="vertical"></a-divider>
              <a>删除</a>
            </a>
            <p
              slot="expandedRowRender"
              slot-scope="record"
              style="margin: 0 50px 0 0"
            >
              <a-steps
                :current="record.current"
                size="small"
                :status="record.status"
                labelPlacement="vertical"
              >
                <a-step v-for="item in record.timeline" :key="item.title">
                  <template slot="title">{{ item.title }}</template>
                  <span slot="description">{{ item.time }}</span>
                </a-step>
              </a-steps>
            </p>
          </a-table>
        </div>
      </div>
    </div>

    <a-modal
      v-model="visible"
      title="更新流程"
      @ok="onSubmit"
      ok-text="确认"
      cancel-text="取消"
    >
      <a-form-model
        ref="ruleForm"
        :model="form"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-model-item label="新流程名称" prop="name">
          <a-input v-model="form.name" />
        </a-form-model-item>
        <a-form-model-item label="日期" prop="date">
          <a-date-picker
            v-model="form.date"
            type="date"
            placeholder="选择日期"
            style="width: 100%"
          />
        </a-form-model-item>
      </a-form-model>
    </a-modal>
    <a-modal
      v-model="statusVisible"
      title="更新流程"
      @ok="changeStatus"
      ok-text="确认"
      cancel-text="取消"
    >
      <a-form-model
        ref="statusForm"
        :model="statusForm"
        :rules="statusRules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-model-item label="新状态">
          <a-select v-model="statusForm.status" placeholder="请选择新的流程状态">
            <a-select-option value="finish"> 通过 </a-select-option>
            <a-select-option value="error"> 不通过 </a-select-option>
          </a-select>
        </a-form-model-item>
      </a-form-model>
    </a-modal>
  </div>
</template>

<script>
const columns = [
  { title: "公司部门", dataIndex: "department", key: "department" },
  { title: "申请日期", dataIndex: "appTime", key: "appTime" },
  { title: "当前状态", dataIndex: "status", key: "status" },
  {
    title: "操作",
    dataIndex: "",
    key: "x",
    scopedSlots: { customRender: "action" },
  },
];

let data = [
  {
    key: 1,
    department: "John Brown",
    appTime: 32,
    timeline: [
      {
        title: "简历投递",
        time: "2023-5-12",
      },
    ],
    current: 0,
    status: "finish",
  },
  {
    key: 2,
    department: "John Brown",
    appTime: 32,
    timeline: [
      {
        title: "简历投递",
        time: "2023-5-12",
      },
      {
        title: "综合测评",
        time: "2023-5-12",
      },
      {
        title: "一面",
        time: "2023-5-13",
      },
    ],
    current: 2,
    status: "finish",
  },
];
export default {
  data() {
    return {
      data,
      columns,
      visible: false,
      statusVisible: false,
      labelCol: { span: 5 },
      wrapperCol: { span: 16 },
      form: {
        name: "",
        date: undefined,
      },
      statusForm: {
        status: undefined,
      },
      statusRules: {
        status: [
          { required: true, message: "请选择新的流程状态", trigger: "change" },
        ],
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入新状态的名称",
            trigger: "blur",
          },
        ],
        date: [{ required: true, message: "请选择日期", trigger: "change" }],
      },
      record: undefined,
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
    updateProgress(record) {
      this.record = record;
      this.visible = true;
    },
    updateStatus(record) {
      this.record = record;
      this.statusVisible = true;
    },
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          let myDate = this.$moment(this.form.date).format("YYYY-MM-DD"); //2019-04-11
          this.data.forEach((item) => {
            if (item.key === this.record.key) {
              item.timeline.push({
                title: this.form.name,
                time: myDate,
              });
              item.current++;
              item.status = 'process';
            }
          });
          this.$refs.ruleForm.resetFields();
          this.visible = false;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    changeStatus() {
      this.$refs.statusForm.validate((valid) => {
        if (valid) {
          console.log('this.statusForm', this.statusForm);
          this.data.forEach((item) => {
            if (item.key === this.record.key) {
              item.status = this.statusForm.status;
            }
          });
          this.$refs.statusForm.resetFields();
          this.statusVisible = false;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
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
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;

      .myTable {
        padding: 30px;
      }
    }
  }
}
</style>
