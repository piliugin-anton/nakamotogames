<div class="uppercase inline-block font-bold text-[10px] px-[10px] py-[5px] rounded-[8px] {active_class} {$$restProps.class}">
    { text }
</div>

<script lang="ts">
	export let text: string
    export let light: boolean = false

    $: active_class = light ? 'bg-transparent border-solid border-[#e5e5e5] border-[1px] text-[#6c757d]' : 'bg-white/[0.15] text-white';
</script>