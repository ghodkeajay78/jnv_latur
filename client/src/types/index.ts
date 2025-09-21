export interface SchoolInfo {
  name: string;
  location: string;
  established: number;
  affiliation: string;
  classes: string;
  students: number;
  faculty: number;
  phone: string;
  email: string;
  address: string;
}

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'news' | 'event' | 'result' | 'announcement';
  category: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  level: 'national' | 'state' | 'district' | 'school';
  category: 'academic' | 'sports' | 'cultural' | 'science';
  year: number;
  award?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  subject: string;
  qualification: string;
  experience: number;
  image?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'campus' | 'events' | 'activities' | 'sports' | 'cultural';
  date?: string;
}

export interface ContactInfo {
  office: string;
  principal: string;
  admissions: string;
  email: {
    general: string;
    principal: string;
    admissions: string;
  };
  address: {
    street: string;
    village: string;
    taluka: string;
    district: string;
    state: string;
    pincode: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}
