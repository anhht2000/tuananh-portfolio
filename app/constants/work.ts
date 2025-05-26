import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
	{
		point: new THREE.Vector3(0, 4, 0),
		year: "2018",
		title: "University of Transport and Communications",
		subtitle: "BSc in Information Technology",
		position: "left",
	},
	{
		point: new THREE.Vector3(0, 0, 0),
		year: "2020",
		title: "T3H Center",
		subtitle: "ReactJS Certification",
		position: "right",
	},
	{
		point: new THREE.Vector3(-3, -2, -2),
		year: "2020",
		title: "Simstech.JSC",
		subtitle: "Frontend & Backend Developer",
		position: "left",
	},
	{
		point: new THREE.Vector3(-4, -4, -3),
		year: "2022",
		title: "Scuti Co., Ltd.",
		subtitle: "Frontend Developer",
		position: "right",
	},
	{
		point: new THREE.Vector3(-3, -1, -6),
		year: "2023",
		title: "Avada",
		subtitle: "Frontend & Backend Developer",
		position: "left",
	},
];
