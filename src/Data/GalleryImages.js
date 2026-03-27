import classroom from '/teacherStudent/inspect.jpg'
import boyWriting from '/teacherStudent/boy-writting.jpg'
import exam from '/teacherStudent/exam.jpg'
import happyHour from '/teacherStudent/happyHour.jpg'
import teacherPointing from '/teacherStudent/teacher-pointing.jpg'
import students from '../../public/teacherStudent/students.jpg'
import CBT from '../../public/teacherStudent/CBT.jpg'

export const categories = [
  "All",
  "Inspection",
  "Training",
  "Meetings",
  "Events",
  "Students",
  "Documents"
];

export const GalleryImages = [
  {
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    category: "Inspection"
  },
  {
    src: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b",
    category: "Training"
  },
  {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754",
    category: "Meetings"
  },
  {
    src: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238",
    category: "Events"
  },
  {
    src: students,
    category: "Students"
  },
  {
    src:  happyHour,
    category: "Students"
  },
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    category: "Documents"
  },

  // Duplicate and mix categories to reach 20–40 images

  {
    src: classroom,
    category: "Inspection"
  },
  {
    src: boyWriting,
    category: "Training"
  },
  {
    src: exam,
    category: "Training"
  },
  {
    src: teacherPointing,
    category: "Training"
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    category: "Meetings"
  },
  {
    src: CBT,
    category: "Events"
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    category: "Students"
  },
  {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    category: "Documents"
  }
];