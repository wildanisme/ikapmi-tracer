<template>
    <Head title="Form Elements" />
    <PageBreadcrumb pageTitle="From Elements" />
    <div class="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div class="space-y-6">
            <DefaultInputs />
            <SelectInputs />
            <TextAreaInputs />
            <InputStates />
        </div>
        <div class="space-y-6">
            <InputGroup />
            <FileInputExample />
            <CheckboxComponent />
            <RadioButtons />
            <ToggleSwitch />
            <Dropzone />
        </div>
    </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import AppLayout from '../../Layouts/AppLayout.vue';
import PageBreadcrumb from '../../components/common/PageBreadcrumb.vue';
import CheckboxComponent from '../../components/form/form-elements/CheckboxComponent.vue';
import DefaultInputs from '../../components/form/form-elements/DefaultInputs.vue';
import Dropzone from '../../components/form/form-elements/Dropzone.vue';
import FileInputExample from '../../components/form/form-elements/FileInputExample.vue';
import InputGroup from '../../components/form/form-elements/InputGroup.vue';
import InputStates from '../../components/form/form-elements/InputStates.vue';
import RadioButtons from '../../components/form/form-elements/RadioButtons.vue';
import SelectInputs from '../../components/form/form-elements/SelectInputs.vue';
import TextAreaInputs from '../../components/form/form-elements/TextAreaInputs.vue';
import ToggleSwitch from '../../components/form/form-elements/ToggleSwitch.vue';

defineOptions({
    layout: AppLayout,
});
</script>
