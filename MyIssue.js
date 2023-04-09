const MyIssue = {
    components: {
        MyButton
    },
    template: `
      <div class="issue" v-bind:class="{'issue-opened': !completed, 'issue-closed': completed}">
      <div class="issue-header">
        <div class="issue-title">{{ title }}</div>
        <div>
          <my-button v-if="completed === false" @click="$emit('edit')">
            <i class="bi bi-pencil"></i>
          </my-button>
          <my-button v-if="completed === false" @click="$emit('close')">
            <i class="bi bi-check-circle"></i>
          </my-button>
          <my-button @click="$emit('remove')">
            <i class="bi bi-trash3 delete"></i>
          </my-button>
        </div>
      </div>
      <div class="issue-text">
        {{ body }}
      </div>
      </div>`,
    props: {
        title: String,
        body: String,
        completed: Boolean
    }
}

// url += Object.entries(filterValues)
//     .filter(([k, v]) => !!v)
//     .map(arr => arr.join('='))
//     .join('&')