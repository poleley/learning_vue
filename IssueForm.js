const IssueForm = {
    components: {MyButton, MyInput, MyTextarea},
    template: `
      <div class="issue-form-div">
      <form @submit.prevent>
        <my-input
            v-model="formData.title"
            placeholder="Заголовок"
        ></my-input>
        <div class="textarea-div">
          <my-textarea
              v-model="formData.body"
              placeholder="Дополнительно"
          ></my-textarea>
        </div>
        <div class="button-div">
          <my-button
              @click="$emit('save', formData)"
              class="button-create"
          >
            Сохранить
          </my-button>
        </div>
      </form>
      </div>
    `,
    props: {
        issue: {
            type: Object
        }
    },
    methods: {

    },
    data() {
        return {
            formData: {
                ...this.issue
            }
        }
    },
    computed: {
        isEditIssue() {
            return this.issue !== undefined;
        }
    }
}
