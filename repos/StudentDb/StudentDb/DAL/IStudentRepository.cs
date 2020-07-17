namespace StudentDb.DAL
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using StudentDb.Models;

    public interface IStudentRepository : IDisposable
    {
        Task<List<Student>> GetStudents();
        Task<Student> GetStudentById(int? studentId);
        void InsertStudent(Student student);
        void DeleteStudent(int studentId);
        void UpdateStudent(Student student);
        Task<int> Save();
    }
}
