const IssueList = {
    components: {
        MyIssue
    },
    template: `
      <div class="issues">
      <h2>Все задачи</h2>
      <my-issue
          v-for="issue in issues"
          :title="issue.title"
          :body="issue.body"
          :completed="issue.completed"
          :key="issue.id"
          @remove="$emit('remove', issue)"
          @edit="$emit('start-edit', issue.id)"
          @close="$emit('close', issue.id)"
      >
      </my-issue>
      </div>
    `,
    props: {
        issues: {
            type: Array,
            required: true
        }
    },
}