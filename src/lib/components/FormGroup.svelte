<script lang="ts">
  type FormType = "input" | "textarea" | "select";

  export let label: string = "",
    placeholder: string = "",
    type: string = "text",
    value: string | number = "",
    multiple: boolean = false,
    files: FileList | null = null,
    formType: FormType = "input";

  function typeAction(node: { type: string }) {
    node.type = type;
  }
</script>

{#if formType === "input"}
  {@const id = label.toLowerCase().replace(" ", "_")}
  <div>
    <label for={id} class="block mb-2 text-sm font-medium text-gray-900">
      {label}
    </label>

    <input
      {id}
      use:typeAction
      bind:value
      name={id}
      class="bg-gray-50 border border-primary text-gray-900 text-sm rounded-md focus:outline-none block w-full p-2.5"
      placeholder={placeholder
        ? placeholder
        : "Enter your " + label.toLowerCase()}
    />
  </div>
{:else if formType === "textarea"}
  <div>
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900">
      {label ? label : "Your message"}
    </label>
    <textarea
      id="message"
      name="message"
      bind:value
      rows="4"
      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-primary focus:outline-none"
      placeholder={placeholder ? placeholder : "Write your thoughts here..."}
    />
  </div>
{:else if formType === "select"}
  {@const id = label.toLowerCase().replace(" ", "_")}
  <div>
    <label for="country" class="block mb-2 text-sm font-medium text-gray-900">
      {label}
    </label>

    <select
      {id}
      name={id}
      bind:value
      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option value="usa">USA</option>
      <option value="canada">Canada</option>
      <option value="mexico">Mexico</option>
    </select>
  </div>
{:else if formType === "file"}
  {@const id =
    label != "" ? label.toLowerCase().replace(" ", "_") : "file_input"}
  <div>
    <label
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      for={id}
    >
      {label != "" ? label : "Upload a file"}
    </label>
    <input
      class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
      {id}
      bind:files
      {multiple}
      type="file"
    />
    <p class="mt-1 text-sm text-gray-500" {id}>
      SVG, PNG, JPG or GIF (MAX. 800x400px).
    </p>
  </div>
{/if}
