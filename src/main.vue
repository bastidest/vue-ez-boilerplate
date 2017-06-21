<template lang="pug">
	.app
		span Make addable?
		input(type="checkbox", v-model="isAddable")
		.demo
			p strings, multiple
				span(v-show="isAddable") , addable
			multiselect(v-model="simpleTagsSelected", :options="simpleTagsOptions", taggable, @tag="addSimpleTags", multiple)
			span.demospan(v-for="tag in simpleTagsSelected") {{ tag }}

		.demo
			p strings, single
				span(v-show="isAddable") , addable
			multiselect(v-model="simpleTagSelected", :options="simpleTagsOptions", taggable, @tag="addSimpleTag")
			span.demospan {{ simpleTagSelected }}

		.demo
			p key-value, multiple
				span(v-show="isAddable") , addable
			multiselect(v-model="objectTagsSelected", :options="objectTagsOptions", taggable, @tag="addObjectTags", multiple, track-by="id", label="text")
			span.demospan(v-for="tag in objectTagsSelected") {{ tag || (tag.id + ": " + tag.text) }}

		.demo
			p key-value, single
				span(v-show="isAddable") , addable
			multiselect(v-model="objectTagSelected", :options="objectTagsOptions", taggable, @tag="addObjectTag", track-by="id", label="text")
			span.demospan {{ objectTagSelectedString }}
</template>

<script>
	import Multiselect from 'vue-multiselect'
	
	require('../node_modules/vue-multiselect/dist/vue-multiselect.min.css');

	function getTags() {
		return ['tag1', 'tag2', 'tag3'];
	}

	function getObjectTags() {
		return [
			{id: "asdf1", text: "tag1"},
			{id: "asdf2", text: "tag2"},
			{id: "asdf3", text: "tag3"}
		]
	}

	export default {
		components: { Multiselect },
		data() {
			return {
				isAddable: true,
        simpleTagsSelected: ['tag1', 'newtag'],
        simpleTagSelected: "tag1",
        simpleTagsOptions: getTags(),
				objectTagsSelected: [
					{id: "asdf1", text: "tag1"},
					{id: "_feds1", text: "newtag"}
				],
				objectTagSelected: {id: "asdf1", text: "tag1"},
				objectTagsOptions: getObjectTags()
			}
		},
		computed: {
			objectTagSelectedString() {
				if(!this.objectTagSelected) return "null";
				return this.objectTagSelected.id + ": " + this.objectTagSelected.text;
			}
		},
		methods: {
			addSimpleTags(newTag) {
				if(!this.isAddable) return;
				this.simpleTagsSelected.push(newTag);
				this.simpleTagsOptions.push(newTag);
			},
			addSimpleTag(newTag) {
				if(!this.isAddable) return;
				this.simpleTagSelected = newTag;
				this.simpleTagsOptions.push(newTag);
			},
			addObjectTags(newTag) {
				if(!this.isAddable) return;
				const tag = {
					id: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000)),
					text: newTag
				}
				this.objectTagsSelected.push(tag);
				this.simpleTagsOptions.push(tag);
			},
			addObjectTag(newTag) {
				if(!this.isAddable) return;
				const tag = {
					id: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000)),
					text: newTag
				}
				this.objectTagSelected = tag;
				this.simpleTagsOptions.push(tag);
			}
		}
	}
</script>

<style lang="sass">
	.app
		width: 720px
		margin: 10 auto

	.demospan
		margin: 10px 5px

	.demo
		margin-bottom: 50px
</style>
