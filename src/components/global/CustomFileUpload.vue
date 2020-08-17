<template>
	<!-- USAGE:
			<custom-file-upload class="file-uploader" type="btn" fileType="application/zip,text/csv"
			 @selectedFiles="onFileSelect">
			 </custom-file-upload>
	-->
	<v-btn @click="$refs.uploader.click()" v-bind="$attrs" v-if="type === 'btn'" v-on="$listeners">
		<!-- pass through scoped slots -->
		<template v-for="(_, scopedSlotName) in $scopedSlots" v-slot:[scopedSlotName]="slotData">
			<slot :name="scopedSlotName" v-bind="slotData" />
		</template>
		<!-- pass through normal slots -->
		<template v-for="(_, slotName) in $slots" v-slot:[slotName]>
			<slot :name="slotName" />
		</template>
		<template v-slot:default>
			<input
				:accept="fileType"
				:multiple="multiple"
				:value="fileContent"
				@change="onFileInputChange"
				class="d-none"
				ref="uploader"
				type="file"
			/>
			<slot></slot>
		</template>
	</v-btn>
	<v-list-item
		@click="$refs.uploader.click()"
		v-bind="$attrs"
		v-else-if="type === 'listItem'"
		v-on="$listeners"
	>
		<!-- pass through scoped slots -->
		<template v-for="(_, scopedSlotName) in $scopedSlots" v-slot:[scopedSlotName]="slotData">
			<slot :name="scopedSlotName" v-bind="slotData" />
		</template>
		<!-- pass through normal slots -->
		<template v-for="(_, slotName) in $slots" v-slot:[slotName]>
			<slot :name="slotName" />
		</template>
		<template v-slot:default>
			<input
				:accept="fileType"
				:multiple="multiple"
				:value="fileContent"
				@change="onFileInputChange"
				class="d-none"
				ref="uploader"
				type="file"
			/>
			<slot></slot>
		</template>
	</v-list-item>
	<label v-else>
		<input
			:accept="fileType"
			:multiple="multiple"
			:value="fileContent"
			@change="onFileInputChange"
			class="d-none"
			ref="uploader"
			type="file"
		/>
		<slot></slot>
	</label>
</template>
<script>
export default {
	name: "CustomFileUpload",
	inheritAttrs: false,
	data() {
		return {
			fileContent: "",
		};
	},
	props: {
		type: {
			type: String,
			required: false,
			default: "btn",
			validator(value) {
				return ["btn", "listItem", "label"].indexOf(value) !== -1;
			},
		},
		fileType: {
			type: String,
			required: true,
		},
		multiple: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		onFileInputChange(e) {
			if (e.target && e.target.value) {
				if (this.multiple) {
					this.$emit("selectedFiles", e.target.files);
				} else {
					this.$emit("selectedFiles", e.target.files[0]);
				}
			} else {
				this.$emit("selectedFiles", null);
			}
		},
	},
};
</script>
