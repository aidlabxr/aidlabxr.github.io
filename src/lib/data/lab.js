import { profile } from './profile.js';

export const lab = {
	name: "Augmented Imaging and Displays (AID) Laboratory",
	shortName: "AID Lab",
	nameJapanese: "拡張イメージング・ディスプレイ研究室",
	institution: "Shibaura Institute of Technology",
	institutionJapanese: "芝浦工業大学",
	address:
		"3378570 埼玉県さいたま市見沼区深作307<br>芝浦工業大学 大宮キャンパス 9号館 9423<br><br>307 Minuma-ku, Saitama, Japan, 3378570<br>Room 9423, Building 9, Omiya Campus, Shibaura Institute of Technology",
	email: profile.email,
	description:
		"We study technologies that aid and augment people's ability to see. Centered on display design, our work combines optics with VR/AR technologies to create new ways of seeing grounded in human visual perception. We aim to support people with visual impairments in achieving more natural visual experiences, while also enabling people with typical vision to gain previously impossible, superhuman visual abilities. Through research that expands the possibilities of vision, we seek to explore aspects of the world that have never been seen before.",
	descriptionJapanese:
		"人の「見る力」を助け（AID）たり広げたりする技術について研究しています。ディスプレイの設計を中心に、光学とVR/AR技術を組み合わせ、人間の視覚に基づいた新しい「見え方」を実現することを目指しています。たとえば、視覚に障害を持つ人がより自然な見え方を得られるように支援したり、健常な人がこれまでにない「超人的な視覚能力」を手に入れたりすることも可能になります。視覚の可能性を広げる研究を通して、今までにない世界の姿を探求していきましょう。",
};

export const principalInvestigator = {
	name: profile.name,
	nameJapanese: profile.nameJapanese,
	title: "Principal Investigator",
	position: profile.position,
	photo: profile.photo,
	link: "/members/xiaodan-hu"
};

export const students = [
	{
		name: "Nozomi Yokota",
		nameJapanese: "横田望",
		role: "B4",
		topic: "3D sketching interfaces in virtual reality",
		topicJapanese: "VRにおける3Dスケッチングインタフェース"
	},
	{
		name: "Shiita Iwai",
		nameJapanese: "岩井椎汰",
		role: "B4",
		topic: "Diminished reality techniques for architecture",
		topicJapanese: "建築のための隠消現実感技術",
		photo: "/images/members/shiita_iwai.jpg"
	},
	{
		name: "Takeshi Suzuki",
		nameJapanese: "鈴木毅",
		role: "B4",
		topic: "AR training systems for peripheral vision in sports",
		topicJapanese: "スポーツにおける周辺視野のためのARトレーニングシステム",
		photo: "/images/members/takeshi_suzuki.jpg"
	}
];

export const visitingStudents = [
	{
		name: "Michael Rauscher",
		role: "M1",
		affiliation: "IVC, TU Graz, Austria",
		photo: "/images/members/michael_rauscher.JPG",
		link: "https://ivc.tugraz.at/research-teams/team-kalkofen/"
	}
];
