namespace StudentDb.DAL
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Threading.Tasks;

    using StudentDb.Models;

    public class StudentRepository : IStudentRepository, IDisposable
    {
        private StudentDbContext _context;

        public StudentRepository(StudentDbContext context)
        {
            this._context = context;
        }

        public Task<List<Student>> GetStudents()
        {
            return this._context.Students.ToListAsync();
        }

        public Task<Student> GetStudentById(int? studentId)
        {
            return this._context.Students.FindAsync(studentId);
        }

        public void InsertStudent(Student student)
        {
            this._context.Students.Add(student);
        }

        public void DeleteStudent(int studentId)
        {
            var student = this._context.Students.Find(studentId);

            if (student != null)
            {
                this._context.Students.Remove(student);
            }
        }

        public void UpdateStudent(Student student)
        {
            this._context.Entry(student).State = EntityState.Modified;
        }

        public Task<int> Save()
        {
            return this._context.SaveChangesAsync();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    this._context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            // Prevent the GC from calling Object.Finalize on an 
            // object that does not require it
            GC.SuppressFinalize(this);
        }
    }
}