import Vue from "vue";

import CustomFileUpload from "@/components/global/CustomFileUpload";
import CustomPopover from "@/components/global/CustomPopover";

import Resize from "@/components/directives/ResizeDirective";

Vue.component(CustomFileUpload.name, CustomFileUpload);
Vue.component(CustomPopover.name, CustomPopover);

Vue.directive("NodeResize", Resize);
