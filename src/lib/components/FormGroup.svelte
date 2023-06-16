<script lang="ts">
  type FormType = "input" | "textarea" | "select";
  type SelectOption = { label: string; value: string | number };

  export let label: string = "",
    placeholder: string = "",
    type: string = "text",
    value: string | number = "",
    multiple: boolean = false,
    files: FileList | null = null,
    formType: FormType = "input",
    options: SelectOption[] = [];

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
      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
    >
      {#if options.length === 0}
        <option disabled selected>No options available </option>
      {:else}
        {#each options as { value, label }}
          <option {value}>{label}</option>
        {/each}
      {/if}
    </select>
  </div>
{:else if formType === "file"}
  {@const id =
    label != "" ? label.toLowerCase().replace(" ", "_") : "file_input"}
  <div>
    <label for={id}>
      <span class="block mb-2 text-sm font-medium text-gray-900">
        {label != "" ? label : "Upload a file"}
      </span>
      <div class="flex gap-1 items-center cursor-pointer">
        <span class="bg-gray-600 text-white px-2 py-1 rounded-lg">
          Browse Files
        </span>
        <span class="text-sm font-medium text-gray-500">
          {files && files.length > 0
            ? files.length > 1
              ? files.length + " files selected"
              : files[0].name
            : "No file selected"}
        </span>
      </div>
    </label>
    <input class="hidden" {id} bind:files {multiple} type="file" />
    <p class="mt-1 text-sm text-gray-500" {id}>
      SVG, PNG, JPG or GIF (MAX. 800x400px).
    </p>
  </div>
{/if}
